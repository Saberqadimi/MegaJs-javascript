// Try & catch
try {
    something()  
} catch (error) {
    console.log(error)
} finally{
    console.log('finaly')
}



download()

function download() {
    console.log('downloading...');
    setTimeout(() => {
        console.log('complete')
    }, 3000);
}
