export type HomeDeviceKey = "default" | "desktop" | "mobile" | "tablet";

export interface HomeCatalogItem {
    value: number;
    key: string;
    label: string;
}

export interface HomeAdvert {
    id: number;
    order: number;
    title: string;
    description: string;
    cta: {
        label: string;
        href: string;
    } | null;
    image: {
        fileName: string;
        contentType: string;
        url: string;
    } | null;
    flags: {
        type: number;
        layoutType: number;
        deviceType: number;
        isValid: boolean;
        isTest: boolean;
    };
    schedule: {
        startsAt: string | null;
        endsAt: string | null;
    } | null;
}

export interface HomeSection {
    key: string;
    label: string;
    layoutType: number;
    devices: Record<HomeDeviceKey, HomeAdvert[]>;
}

export interface HomeResponse {
    schemaVersion: number;
    generatedAt: string;
    catalogs: {
        types: HomeCatalogItem[];
        layoutTypes: HomeCatalogItem[];
        deviceTypes: HomeCatalogItem[];
    };
    sections: HomeSection[];
}
