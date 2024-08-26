import React from "react";

function MapfromHtml() {
  const htmlFile = `<html>
  <head>
  </head>
  <body>
    
    <div id="map" style="height:400px"></div>

    <!-- 
      The defer attribute causes the script to execute after the full HTML
      document has been parsed. For non-blocking uses, avoiding race conditions,
      and consistent behavior across browsers, consider loading using Promises. See
      https://developers.google.com/maps/documentation/javascript/load-maps-js-api
      for more information.
      -->
 
  </body>
</html>`;
  return <div dangerouslySetInnerHTML={{ __html: htmlFile }} />;
}

export default MapfromHtml;

// class mapFromHtml extends React.Component {
//   render() {
//   }
// }
// export default mapFromHtml;
