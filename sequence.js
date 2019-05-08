  // Get the Sequence element
  var sequenceElement = document.getElementById("sequence");

  // Change Sequence's default options
  var options = {
    autoPlay: true,
    autoPlayInterval: 500
  };

  // Initiate Sequence
  var sequence1 = sequence(sequenceElement, options);