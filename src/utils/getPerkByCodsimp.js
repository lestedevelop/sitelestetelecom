import { PERKS_MAP } from "@/utils/perksMap";

export function getPerkByCodsimp(codsimp) {
    if (!codsimp) return null;

    return (
        PERKS_MAP[codsimp.trimEnd()] ||
        null
    );
}
