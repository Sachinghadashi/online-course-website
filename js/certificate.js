function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const user = auth.currentUser.email;
  const course = localStorage.getItem("course");

  doc.setFontSize(18);
  doc.text("Certificate of Completion", 40, 40);

  doc.setFontSize(12);
  doc.text(`This certifies that`, 40, 60);
  doc.text(`${user}`, 40, 70);
  doc.text(`has completed the course`, 40, 80);
  doc.text(`${course}`, 40, 90);

  doc.save("certificate.pdf");
}
