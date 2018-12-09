const yaml = require('js-yaml');
const json_minify = require('jsonminify');
const fs = require('fs');

saveTheme();

fs.watch('source/theme.yaml', saveTheme);

function saveTheme(curr, prev) {
    const theme_file = fs.readFileSync('./source/theme.yaml', 'utf8');
    const yaml_obj = yaml.load(theme_file);
    const json_theme = JSON.stringify(yaml_obj, null, 4);

    fs.writeFile('./themes/theme.json', json_theme, (err) => {
        if (err) {
            throw err;
        }

        console.log(`the file has been saved`);
    });
}
