import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Injectable({ providedIn: 'root' })
export class PdfExportService {
  async exportToPdf(selector: string) {
    const pdf = new jsPDF('p', 'pt', 'a4');
    const margin = 40;
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    let currentY = margin;

    const elements = Array.from(
      document.querySelectorAll(selector)
    ) as HTMLElement[];

    for (const el of elements) {
      const canvas = await html2canvas(el, {
        scale: 2,
        useCORS: true,
        backgroundColor: null,
      });

      const imgData = canvas.toDataURL('image/png');

      // Scale the image to fit within page width (minus side margins) while preserving aspect ratio
      const drawWidth = pageWidth - margin * 2;
      const drawHeight = (canvas.height * drawWidth) / canvas.width;

      // If image would overflow current page, start a new one
      if (currentY + drawHeight > pageHeight - margin) {
        pdf.addPage();
        currentY = margin;
      }

      // Draw the image inside the page with margins
      pdf.addImage(imgData, 'PNG', margin, currentY, drawWidth, drawHeight);

      // Advance position for the next element, with 10pt spacing
      currentY += drawHeight + 10;
    }

    pdf.save('board-games.pdf');
  }
}
