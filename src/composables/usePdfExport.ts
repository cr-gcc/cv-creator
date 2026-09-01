import { ref } from 'vue'
import html2canvas from 'html2canvas-pro'
import jsPDF from 'jspdf'
import { info } from '@/data/info'

const isGenerating = ref(false)

async function downloadPDF() {
    const el = document.getElementById('cv-preview')
    if (!el || isGenerating.value) return

    isGenerating.value = true
    try {
        const canvas = await html2canvas(el, {
            scale: 2,
            useCORS: true,
            backgroundColor: '#f3f4f6',
            logging: false,
        })
        const imgData = canvas.toDataURL('image/png')
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'px',
            format: [794, 1123],
        })
        pdf.addImage(imgData, 'PNG', 0, 0, 794, 1123)
        pdf.save(`CV_${info.name.replace(/\s+/g, '_')}.pdf`)
    } finally {
        isGenerating.value = false
    }
}

export function usePdfExport() {
    return { isGenerating, downloadPDF }
}
