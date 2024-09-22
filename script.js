    const text1 = document.getElementById('text');
    const text = textContainer.innerHTML;
    let index = 0;

    function typeWriter() {
      if (index < text.length) {
        textContainer.innerHTML = text.substring(0, index + 1);
        index++;
        setTimeout(typeWriter, 50);
      }
    }

    window.onload = typeWriter;