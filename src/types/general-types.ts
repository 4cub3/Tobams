export type ParamsList = {
    home: undefined;
    menu:undefined;
    cart:undefined;
    account:undefined;
    bottomTab: undefined
    item: {id:string} | undefined
}
export enum Path{
    HOME= 'home',
    MENU= 'menu',
    CART= 'cart',
    ACCOUNT= 'account',
    BOTTOMTAB = 'bottomTab',
    ITEM= 'item'
}