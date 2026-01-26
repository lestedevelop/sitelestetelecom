"use client";

import {useSite} from "@/contexts/SiteContext";
import {useUiStore} from "@/store/useUiStore";
import SelectCityNow from "@/components/cards/SelectCityNow";

export default function ModalConfirmCity() {
    const {site, setCityConfirmed} = useSite();
    const {isConfirmCityOpen, closeConfirmCity, openSelectCity, isSelectCityOpen, closeSelectCity} = useUiStore();
    const cityLabel = site?.city?.label || "";

    function handleConfirm() {
        setCityConfirmed(true);
        closeConfirmCity();
    }

    function handleChange() {
        openSelectCity();
    }


    return (
        <>
        {isConfirmCityOpen && <div
            className="md:absolute md:top-4 md:right-20 z-1000 mt-4 w-85 translate-y-4 rounded-2xl border border-graylight bg-white shadow-[0_24px_70px_rgba(0,0,0,.18)] overflow-hidden"
            role="menu"
        >
            <div className="px-5 py-4 bg-white">
                <div className="flex flex-col gap-4">
                    {!isSelectCityOpen && <p className="text-sm text-graylight">
                        Verificamos que voce esta em <span className={"font-bold text-base"}>{cityLabel} </span> Quer
                        conferir as ofertas para essa regiao?
                    </p>}
                    {isSelectCityOpen && <p className="text-sm text-graylight font-bold ">
                        Selecione a Sua Cidade:
                    </p>}
                    {!isSelectCityOpen && <div className="flex items-center justify-end gap-3">
                        <button
                            type="button"
                            className="rounded-lg border cursor-pointer border-graylight px-4 py-2 text-sm font-semibold text-darkgreen hover:bg-gray-50"
                            onClick={handleChange}
                        >
                            Trocar localizacao
                        </button>
                        <button
                            type="button"
                            className="rounded-lg bg-primary cursor-pointer  px-4 py-2 text-sm font-semibold text-white hover:opacity-95"
                            onClick={handleConfirm}
                        >
                            Confirmar
                        </button>
                    </div>}
                    <SelectCityNow visible={isSelectCityOpen} setVisible={closeSelectCity} confirm={handleConfirm}/>
                </div>
            </div>
        </div>}
        </>
    );
}
