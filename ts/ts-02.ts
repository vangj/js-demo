interface Dummy {
    id: number;
    version?: '4' | '5' | '6';
}

function doIt(d: Dummy): void {
    console.log(d);
}

const d: Dummy = {
    id: 1,
    version: '4'
}

doIt(d);
