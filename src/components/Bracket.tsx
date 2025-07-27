import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Bracket: React.FC = () => {
  const exportBracketAsPDF = async () => {
    const element = document.getElementById('bracket');
    if (!element) return;
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    pdf.addImage(imgData, 'PNG', 10, 10);
    pdf.save('tabellone.pdf');
  };

  return (
    <div>
      <h2>Tabellone Torneo</h2>
      <div id="bracket" style={{ padding: 20, border: '1px solid gray' }}>
        {/* contenuto del tabellone */}
        <p>Giocatore A vs Giocatore B</p>
      </div>
      <button onClick={exportBracketAsPDF}>Scarica Tabellone in PDF</button>
    </div>
  );
};

export default Bracket;