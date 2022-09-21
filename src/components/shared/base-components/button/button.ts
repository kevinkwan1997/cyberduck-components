export abstract class Button {
    /**
     * When clicked, return information on what element was clicked
     * @abstract
     * @any
     */
    public abstract onClick(): any;
    public isMenuOpen: boolean;
    public type: string;
}