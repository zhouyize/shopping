require('style-loader!css-loader!./admin.css');

require('./content.scss');

document.getElementById('content').innerText = '~~~this is admin page';