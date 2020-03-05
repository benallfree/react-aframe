import React from 'react';
export const Box = ({ children, ...rest }) => {
    //     <a-box
    //     color="yellow"
    //     gps-entity-place="latitude: 40.469836; longitude: -3.446026"
    //   />
    return React.createElement("a-box", Object.assign({}, rest), children);
};
//# sourceMappingURL=Box.js.map