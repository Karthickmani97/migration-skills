window.syncfusionGanttResize = function() {
    try {
        window.dispatchEvent(new Event('resize'));
    } catch (e) {
        // ignore
    }
};
