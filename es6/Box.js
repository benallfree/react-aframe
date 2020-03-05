import * as React from 'react';
export const Box = ({ children, ...rest }) => {
    return React.createElement("a-box", Object.assign({}, rest), children);
};
//# sourceMappingURL=Box.js.map