import { Models_Theme } from "@/api/generated/types"
import { useServerStatus } from "@/app/(main)/_hooks/use-server-status"
import React from "react"
import { useWindowSize } from "react-use"

export const enum ThemeLibraryScreenBannerType {
    Dynamic = "dynamic",
    Custom = "custom",
}

export const enum ThemeMediaPageBannerType {
    Default = "default",
    BlurWhenUnavailable = "blur-when-unavailable",
    DimWhenUnavailable = "dim-when-unavailable",
    HideWhenUnavailable = "hide-when-unavailable",
    Blur = "blur",
    Dim = "dim",
    Hide = "hide",
}

export const ThemeMediaPageBannerTypeOptions = [
    {
        value: ThemeMediaPageBannerType.Default as string, label: "Default",
        description: "Always show a banner image. If not available, the cover image will be used instead.",
    },
    // {
    //     value: ThemeMediaPageBannerType.BlurWhenUnavailable as string, label: "Blur when unavailable",
    //     description: "Show the banner image if available. If not available, the cover image will be used and blurred.",
    // },
    {
        value: ThemeMediaPageBannerType.DimWhenUnavailable as string, label: "Dim if unavailable",
        description: "Show the banner image if available. If not available, the banner will be dimmed.",
    },
    {
        value: ThemeMediaPageBannerType.HideWhenUnavailable as string, label: "Hide if unavailable",
        description: "Show the banner image if available. If not available, the banner will be hidden.",
    },
    {
        value: ThemeMediaPageBannerType.Dim as string, label: "Dim",
        description: "Always dim the banner image.",
    },
    {
        value: ThemeMediaPageBannerType.Blur as string, label: "Blur",
        description: "Always blur the banner image.",
    },
    {
        value: ThemeMediaPageBannerType.Hide as string, label: "Hide",
        description: "Always hide the banner image.",
    },
]

export const enum ThemeMediaPageBannerSize {
    Default = "default", // block height
    Small = "small",
}

export const ThemeMediaPageBannerSizeOptions = [
    {
        value: ThemeMediaPageBannerSize.Default as string, label: "Large",
        description: "Fill a large portion of the screen.",
    },
    {
        value: ThemeMediaPageBannerSize.Small as string, label: "Smaller",
        description: "Use a smaller banner size, displaying more of the image.",
    },
]

export const enum ThemeMediaPageInfoBoxSize {
    // Default = "default",
    Fluid = "fluid",
    Boxed = "boxed",
}

export const ThemeMediaPageInfoBoxSizeOptions = [
    {
        value: ThemeMediaPageInfoBoxSize.Fluid as string, label: "Fluid",
        // description: "Full-width info box with rearrangement of elements.",
    },
    {
        value: ThemeMediaPageInfoBoxSize.Boxed as string, label: "Boxed",
        // description: "Display the media banner as a box",
    },
]

export type ThemeSettings = Omit<Models_Theme, "id">
export const THEME_DEFAULT_VALUES: ThemeSettings = {
    enableColorSettings: false,
    animeEntryScreenLayout: "stacked",
    smallerEpisodeCarouselSize: false,
    expandSidebarOnHover: false,
    backgroundColor: "#070707",
    accentColor: "#6152df",
    sidebarBackgroundColor: "#070707",
    hideTopNavbar: false,
    enableMediaCardBlurredBackground: false,
    libraryScreenBannerType: ThemeLibraryScreenBannerType.Dynamic,
    libraryScreenCustomBannerImage: "",
    libraryScreenCustomBannerPosition: "50% 50%",
    libraryScreenCustomBannerOpacity: 100,
    libraryScreenCustomBackgroundImage: "",
    libraryScreenCustomBackgroundOpacity: 10,
    disableLibraryScreenGenreSelector: false,
    libraryScreenCustomBackgroundBlur: "",
    enableMediaPageBlurredBackground: false,
    disableSidebarTransparency: false,
    useLegacyEpisodeCard: false,
    disableCarouselAutoScroll: false,
    mediaPageBannerType: ThemeMediaPageBannerType.Default,
    mediaPageBannerSize: ThemeMediaPageBannerSize.Default,
    mediaPageBannerInfoBoxSize: ThemeMediaPageInfoBoxSize.Fluid,
    showEpisodeCardAnimeInfo: false,
    continueWatchingDefaultSorting: "AIRDATE_DESC",
    animeLibraryCollectionDefaultSorting: "TITLE",
    mangaLibraryCollectionDefaultSorting: "TITLE",
    showAnimeUnwatchedCount: false,
    showMangaUnreadCount: true,
    hideEpisodeCardDescription: false,
    hideDownloadedEpisodeCardFilename: false,
    customCSS: "",
    mobileCustomCSS: "",
    unpinnedMenuItems: [],
}

export type ThemeSettingsHook = {
    hasCustomBackgroundColor: boolean
} & ThemeSettings

/**
 * Get the current theme settings
 * This hook will return the default values if some values are not set
 */
export function useThemeSettings(): ThemeSettingsHook {
    const serverStatus = useServerStatus()
    return {
        enableColorSettings: getThemeValue("enableColorSettings", serverStatus?.themeSettings),
        animeEntryScreenLayout: getThemeValue("animeEntryScreenLayout", serverStatus?.themeSettings),
        smallerEpisodeCarouselSize: getThemeValue("smallerEpisodeCarouselSize", serverStatus?.themeSettings),
        expandSidebarOnHover: getThemeValue("expandSidebarOnHover", serverStatus?.themeSettings),
        backgroundColor: getThemeValue("backgroundColor", serverStatus?.themeSettings),
        accentColor: getThemeValue("accentColor", serverStatus?.themeSettings),
        hideTopNavbar: getThemeValue("hideTopNavbar", serverStatus?.themeSettings),
        enableMediaCardBlurredBackground: getThemeValue("enableMediaCardBlurredBackground", serverStatus?.themeSettings),
        sidebarBackgroundColor: getThemeValue("sidebarBackgroundColor", serverStatus?.themeSettings),
        libraryScreenBannerType: getThemeValue("libraryScreenBannerType", serverStatus?.themeSettings),
        libraryScreenCustomBannerImage: getThemeValue("libraryScreenCustomBannerImage", serverStatus?.themeSettings),
        libraryScreenCustomBannerPosition: getThemeValue("libraryScreenCustomBannerPosition", serverStatus?.themeSettings),
        libraryScreenCustomBannerOpacity: getThemeValue("libraryScreenCustomBannerOpacity", serverStatus?.themeSettings),
        libraryScreenCustomBackgroundImage: getThemeValue("libraryScreenCustomBackgroundImage", serverStatus?.themeSettings),
        libraryScreenCustomBackgroundOpacity: getThemeValue("libraryScreenCustomBackgroundOpacity", serverStatus?.themeSettings),
        disableLibraryScreenGenreSelector: getThemeValue("disableLibraryScreenGenreSelector", serverStatus?.themeSettings),
        libraryScreenCustomBackgroundBlur: getThemeValue("libraryScreenCustomBackgroundBlur", serverStatus?.themeSettings),
        enableMediaPageBlurredBackground: getThemeValue("enableMediaPageBlurredBackground", serverStatus?.themeSettings),
        disableSidebarTransparency: getThemeValue("disableSidebarTransparency", serverStatus?.themeSettings),
        useLegacyEpisodeCard: getThemeValue("useLegacyEpisodeCard", serverStatus?.themeSettings),
        disableCarouselAutoScroll: getThemeValue("disableCarouselAutoScroll", serverStatus?.themeSettings),
        hasCustomBackgroundColor: !!serverStatus?.themeSettings?.backgroundColor && serverStatus?.themeSettings?.backgroundColor !== THEME_DEFAULT_VALUES.backgroundColor,
        mediaPageBannerType: getThemeValue("mediaPageBannerType", serverStatus?.themeSettings),
        mediaPageBannerSize: getThemeValue("mediaPageBannerSize", serverStatus?.themeSettings),
        mediaPageBannerInfoBoxSize: getThemeValue("mediaPageBannerInfoBoxSize", serverStatus?.themeSettings),
        showEpisodeCardAnimeInfo: getThemeValue("showEpisodeCardAnimeInfo", serverStatus?.themeSettings),
        continueWatchingDefaultSorting: getThemeValue("continueWatchingDefaultSorting", serverStatus?.themeSettings),
        animeLibraryCollectionDefaultSorting: getThemeValue("animeLibraryCollectionDefaultSorting", serverStatus?.themeSettings),
        mangaLibraryCollectionDefaultSorting: getThemeValue("mangaLibraryCollectionDefaultSorting", serverStatus?.themeSettings),
        showAnimeUnwatchedCount: getThemeValue("showAnimeUnwatchedCount", serverStatus?.themeSettings),
        showMangaUnreadCount: getThemeValue("showMangaUnreadCount", serverStatus?.themeSettings),
        hideEpisodeCardDescription: getThemeValue("hideEpisodeCardDescription", serverStatus?.themeSettings),
        hideDownloadedEpisodeCardFilename: getThemeValue("hideDownloadedEpisodeCardFilename", serverStatus?.themeSettings),
        customCSS: getThemeValue("customCSS", serverStatus?.themeSettings),
        mobileCustomCSS: getThemeValue("mobileCustomCSS", serverStatus?.themeSettings),
        unpinnedMenuItems: getThemeValue("unpinnedMenuItems", serverStatus?.themeSettings),
    }
}

function getThemeValue(key: string, settings: ThemeSettings | undefined | null): any {
    // @ts-ignore
    const defaultValue = THEME_DEFAULT_VALUES[key]

    if (!settings) {
        return defaultValue
    }

    // Special case for mediaPageBannerInfoBoxSize
    if (key === "mediaPageBannerInfoBoxSize") {
        if (settings?.mediaPageBannerInfoBoxSize !== "boxed") {
            return defaultValue
        }
    }

    const val = (settings as any)[key]
    const defaultType = typeof defaultValue
    const valType = typeof val

    // Handle different types based on the default value's type
    if (val === null || val === undefined) {
        return defaultValue
    }

    switch (defaultType) {
        case "string":
            // For strings: only use default if current value is empty string and default is not empty
            if (valType === "string" && val === "" && defaultValue !== "") {
                return defaultValue
            }
            // If types don't match, use default
            if (valType !== "string") {
                return defaultValue
            }
            return val

        case "number":
            // For numbers: use default if not a valid number
            if (valType !== "number" || isNaN(val)) {
                return defaultValue
            }
            return val

        case "boolean":
            // For booleans: use actual value if it's a boolean, otherwise use default
            if (valType === "boolean") {
                return val
            }
            return defaultValue

        case "object":
            if (Array.isArray(defaultValue)) {
                // For arrays: use default if not an array
                if (!Array.isArray(val)) {
                    return defaultValue
                }
                return val
            } else {
                // For objects: use default if not an object
                if (valType !== "object" || val === null) {
                    return defaultValue
                }
                return val
            }

        default:
            // For any other type, return the value
            return val
    }
}

export function useIsMobile(): { isMobile: boolean } {
    const { width } = useWindowSize()
    return { isMobile: React.useMemo(() => width < 1024, [width < 1024]) }
}