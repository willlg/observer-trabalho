import TorcedorCabuloso from "./observers/TorcedorCabuloso";
import TorcedorCule from "./observers/TorcedorCule";
import Barcelona from "./subjects/Barcelona";
import Cruzeiro from "./subjects/Cruzeiro";

const Time = new Cruzeiro();
const Time2 = new Barcelona();

const torcedor1 = new TorcedorCabuloso('Fabio', Time);
Time.adicionarTorcedor(torcedor1);

const torcedor2 = new TorcedorCabuloso('Arrascaeta', Time);
Time.adicionarTorcedor(torcedor2);

//const torcedor3 = new TorcedorCule('Messi', Time2);
//Time2.adicionarTorcedor(torcedor3);

//const torcedor4 = new TorcedorCule('Iniesta', Time2);
//Time2.adicionarTorcedor(torcedor4);

Time.marcarGol();
Time.marcarGol();

Time.removerTorcedor(torcedor2);

Time.marcarGol();

//Time2.marcarGol();
//Time2.marcarGol();

//Time2.removerTorcedor(torcedor4);

//Time2.marcarGol();
