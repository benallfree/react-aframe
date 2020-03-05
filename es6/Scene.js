import React from 'react';
export const Scene = ({ children, ...rest }) => {
    return React.createElement("a-scene", Object.assign({}, rest), children);
};
//# sourceMappingURL=Scene.js.map