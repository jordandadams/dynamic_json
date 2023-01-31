class Home {
    buildPage() {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "../models/data.json", true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var data = JSON.parse(xhr.responseText);

                // Loop over the elements in the elements array
                for (var i = 0; i < data.elements.length; i++) {
                    // Extract the data for each element
                    var element = data.elements[i];

                    // Title
                    var title = element.title.text;
                    var titleColor = element.title.color;
                    var titleFontSize = element.title.fontSize;

                    // Description
                    var description = element.description.text;
                    var desColor = element.description.color;
                    var desFontSize = element.description.fontSize;

                    // Buttons
                    var buttons = element.buttons;

                    // Create HTML elements and set their contents
                    var titleElement = document.createElement("h1");
                    titleElement.innerHTML = title;
                    titleElement.style.color = titleColor;
                    titleElement.style.fontSize = titleFontSize;

                    var descriptionElement = document.createElement("p");
                    descriptionElement.innerHTML = description;
                    descriptionElement.style.color = desColor;
                    descriptionElement.style.fontSize = desFontSize;

                    var buttonsContainer = document.createElement("div");
                    buttonsContainer.classList.add("d-flex", "justify-content-center");

                    // Check if the buttons property exists
                    if (buttons) {
                        for (var j = 0; j < buttons.length; j++) {
                            var button = document.createElement("button");
                            button.innerHTML = buttons[j].text;
                            button.onclick = new Function(buttons[j].action);
                            button.style.color = buttons[j].buttonColor;
                            button.style.fontSize = buttons[j].buttonFontSize;
                            button.classList.add("btn", "btn-primary", "mr-2");
                            buttonsContainer.appendChild(button);
                        }
                    }

                    // Append the HTML elements to the page
                    document.body.appendChild(titleElement);
                    document.body.appendChild(descriptionElement);
                    document.body.appendChild(buttonsContainer);
                }
            }
        };
        xhr.send();
    }

    test() {
        console.log('This action worked! On button 4');
    }
}
