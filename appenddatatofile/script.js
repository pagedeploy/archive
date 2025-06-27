const allBackhalves = [];

document.getElementById("dataForm").addEventListener("submit", (e) => {
  e.preventDefault();
  
  const input = document.getElementById("backhalf");
  const backhalf = input.value.trim();

  if (backhalf !== "") {
    allBackhalves.push(backhalf);
    input.value = ""; // Clear the input field

    const dataToAppend = allBackhalves.join("\n") + "\n";
    const file = new Blob([dataToAppend], { type: "text/plain" });

    if (window.navigator.msSaveOrOpenBlob) {
      // For IE/Edge browsers
      window.navigator.msSaveOrOpenBlob(file, "backhalves.txt");
    } else {
      // For other browsers
      const anchor = document.createElement("a");
      const url = URL.createObjectURL(file);
      anchor.href = url;
      anchor.download = "backhalves.txt";
      anchor.click();
      URL.revokeObjectURL(url);
    }
  }
});
