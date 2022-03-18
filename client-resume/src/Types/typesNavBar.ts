export type itemsNavBar = Array<itemNavBar>

export type itemNavBar = {
    nameRu: string;
    nameEng: string;
    to: string
}

export type TNavBar = {
        arrItems:Array<itemNavBar>,
        activeClass:Boolean
}

