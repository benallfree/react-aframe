import * as React from 'react';
export const Plane = ({ children, ...rest }) => {
    return React.createElement("a-cylinder", Object.assign({}, rest), children);
};
//# sourceMappingURL=Plane.js.map