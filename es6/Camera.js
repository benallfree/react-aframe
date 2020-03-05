import * as React from 'react';
export const Camera = ({ children, ...rest }) => {
    //  <a-camera gps-camera rotation-reader></a-camera>
    return React.createElement("a-camera", Object.assign({}, rest), children);
};
//# sourceMappingURL=Camera.js.map