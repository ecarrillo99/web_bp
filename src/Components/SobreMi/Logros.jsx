import Historia from "./Historia";
import Reconocimientos from "./Reconocimientos";

const Logros = () => {

    return (
        <div className='flex flex-col gap-6 mx-auto max-w-6xl py-6 sm:px-6 lg:px-8 w-full mt-7'>
            <label className='text-2xl font-semibold -mb-3'>Logros & Reconocimientos</label>
            <Historia></Historia>
            <Reconocimientos></Reconocimientos>
        </div>
    );
};

export default Logros;