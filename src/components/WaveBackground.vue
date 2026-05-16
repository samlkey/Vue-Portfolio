<template>
    <div ref="containerRef" class="wave-bg" aria-hidden="true">
        <svg ref="svgRef" xmlns="http://www.w3.org/2000/svg"></svg>
    </div>
</template>

<script>
import { createNoise2D } from 'simplex-noise'

export default {
    name: 'WaveBackground',
    mounted() {
        this._noise   = createNoise2D()
        this._paths   = []
        this._lines   = []
        this._rafId   = null
        this._bounding = null
        this._mouse   = { x: -10, y: 0, lx: 0, ly: 0, sx: 0, sy: 0, v: 0, vs: 0, a: 0, set: false }

        this._onResize    = () => { this._setSize(); this._setLines() }
        this._onMouseMove = (e) => this._updateMouse(e.pageX, e.pageY)
        this._onTouch     = (e) => { e.preventDefault(); this._updateMouse(e.touches[0].clientX, e.touches[0].clientY) }

        this._setSize()
        this._setLines()

        window.addEventListener('resize',    this._onResize)
        window.addEventListener('mousemove', this._onMouseMove)
        this.$el.addEventListener('touchmove', this._onTouch, { passive: false })

        this._rafId = requestAnimationFrame(this._tick)
    },
    beforeUnmount() {
        if (this._rafId) cancelAnimationFrame(this._rafId)
        window.removeEventListener('resize',    this._onResize)
        window.removeEventListener('mousemove', this._onMouseMove)
        this.$el.removeEventListener('touchmove', this._onTouch)
    },
    methods: {
        _setSize() {
            const el  = this.$refs.containerRef
            const svg = this.$refs.svgRef
            if (!el || !svg) return
            this._bounding = el.getBoundingClientRect()
            svg.style.width  = `${this._bounding.width}px`
            svg.style.height = `${this._bounding.height}px`
        },
        _setLines() {
            const svg = this.$refs.svgRef
            if (!svg || !this._bounding) return

            const { width, height } = this._bounding
            this._lines = []
            this._paths.forEach(p => p.remove())
            this._paths = []

            const xGap = 12
            const yGap = 12
            const totalLines  = Math.ceil((width  + 200) / xGap)
            const totalPoints = Math.ceil((height +  30) / yGap)
            const xStart = (width  - xGap * totalLines)  / 2
            const yStart = (height - yGap * totalPoints) / 2

            for (let i = 0; i < totalLines; i++) {
                const points = []
                for (let j = 0; j < totalPoints; j++) {
                    points.push({
                        x: xStart + xGap * i,
                        y: yStart + yGap * j,
                        wave:   { x: 0, y: 0 },
                        cursor: { x: 0, y: 0, vx: 0, vy: 0 },
                    })
                }

                const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
                path.setAttribute('fill',         'none')
                path.setAttribute('stroke',       'currentColor')
                path.setAttribute('stroke-width', '1')
                svg.appendChild(path)
                this._paths.push(path)
                this._lines.push(points)
            }
        },
        _updateMouse(x, y) {
            if (!this._bounding) return
            const m = this._mouse
            m.x = x - this._bounding.left
            m.y = y - this._bounding.top + window.scrollY
            if (!m.set) { m.sx = m.x; m.sy = m.y; m.lx = m.x; m.ly = m.y; m.set = true }
        },
        _movePoints(time) {
            const m = this._mouse
            this._lines.forEach(points => {
                points.forEach(p => {
                    const move = this._noise(
                        (p.x + time * 0.008) * 0.003,
                        (p.y + time * 0.003) * 0.002
                    ) * 8
                    p.wave.x = Math.cos(move) * 12
                    p.wave.y = Math.sin(move) * 6

                    const dx = p.x - m.sx
                    const dy = p.y - m.sy
                    const d  = Math.hypot(dx, dy)
                    const l  = Math.max(175, m.vs)

                    if (d < l) {
                        const s = 1 - d / l
                        const f = Math.cos(d * 0.001) * s
                        p.cursor.vx += Math.cos(m.a) * f * l * m.vs * 0.00035
                        p.cursor.vy += Math.sin(m.a) * f * l * m.vs * 0.00035
                    }

                    p.cursor.vx += (0 - p.cursor.x) * 0.01
                    p.cursor.vy += (0 - p.cursor.y) * 0.01
                    p.cursor.vx *= 0.95
                    p.cursor.vy *= 0.95
                    p.cursor.x  += p.cursor.vx
                    p.cursor.y  += p.cursor.vy
                    p.cursor.x   = Math.min(50, Math.max(-50, p.cursor.x))
                    p.cursor.y   = Math.min(50, Math.max(-50, p.cursor.y))
                })
            })
        },
        _moved(p, withCursor = true) {
            return {
                x: p.x + p.wave.x + (withCursor ? p.cursor.x : 0),
                y: p.y + p.wave.y + (withCursor ? p.cursor.y : 0),
            }
        },
        _drawLines() {
            this._lines.forEach((points, i) => {
                if (points.length < 2 || !this._paths[i]) return
                const first = this._moved(points[0], false)
                let d = `M ${first.x} ${first.y}`
                for (let j = 1; j < points.length; j++) {
                    const c = this._moved(points[j])
                    d += ` L ${c.x} ${c.y}`
                }
                this._paths[i].setAttribute('d', d)
            })
        },
        _tick(time) {
            const m = this._mouse
            m.sx += (m.x - m.sx) * 0.1
            m.sy += (m.y - m.sy) * 0.1

            const dx = m.x - m.lx
            const dy = m.y - m.ly
            const d  = Math.hypot(dx, dy)
            m.v   = d
            m.vs += (d - m.vs) * 0.1
            m.vs  = Math.min(100, m.vs)
            m.lx  = m.x
            m.ly  = m.y
            m.a   = Math.atan2(dy, dx)

            this._movePoints(time)
            this._drawLines()
            this._rafId = requestAnimationFrame(this._tick)
        },
    },
}
</script>

<style scoped>
.wave-bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
}
.wave-bg svg {
    display: block;
    width: 100%;
    height: 100%;
}
</style>
