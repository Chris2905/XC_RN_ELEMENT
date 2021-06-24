const shouldRender = (prevProps: any, nextProps: any) => {
    if (JSON.stringify(prevProps) == JSON.stringify(nextProps)) {
        return true;
    }
    return false;
};

export default {
    shouldRender,
};
