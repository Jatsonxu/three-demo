// WebGL兼容性检查（WebGL compatibility check）


export const checkWebGLAvailable = (WebGL, callBack, element = "container") => {
    if (WebGL.isWebGLAvailable()) {
        // Initiate function or other initializations here
        callBack(); //  animate();

    } else {
        const warning = WebGL.getWebGLErrorMessage();
        document.getElementById(element).appendChild(warning);
    }
}