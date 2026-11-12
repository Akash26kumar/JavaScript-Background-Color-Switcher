# JavaScript-Background-Color-Switcher
# JavaScript Background Color Switcher

A simple web page that changes its background color when you click one of the color boxes. Built with plain HTML, CSS, and JavaScript, with no frameworks or dependencies.

## Features

- Five clickable color boxes: grey, white, blue, yellow, and purple
- Instantly changes the page background on click
- Lightweight and runs in any modern browser
- No installation or build step required

## Demo

Open `index.html` in your browser and click any color box to change the background.

> Tip: once the project is on GitHub, you can host it for free with GitHub Pages and add the live link here.

## Project Structure

```
.
├── index.html   # Page structure and color boxes
├── style.css    # Layout and box styling
├── app.js       # Click logic that changes the background
└── README.md
```

## How to Run

1. Download or clone this repository:
   ```bash
   git clone https://github.com/<your-username>/<repo-name>.git
   ```
2. Open the project folder.
3. Double-click `index.html` to open it in your browser.

## How It Works

1. Each color box is a `<span>` with the class `button` and an `id` matching its color (for example, `id="blue"`).
2. `app.js` selects all elements with the `button` class and attaches a click listener to each.
3. When a box is clicked, the script sets the page's `body` background to the clicked element's `id`, which is a valid CSS color name.

## Customization

To add a new color:

1. Add a new box in `index.html`:
   ```html
   <span class="button" id="red"></span>
   ```
2. Add its style in `style.css`:
   ```css
   #red {
     background: red;
   }
   ```

No changes to `app.js` are needed, since the script uses the box's `id` as the color.

## Technologies Used

- HTML5
- CSS3
- JavaScript (vanilla)

## Contributing

Suggestions and improvements are welcome. Fork the repo, make your changes, and open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
