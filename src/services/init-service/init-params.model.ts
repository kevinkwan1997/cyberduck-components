import type { BaseComponent } from "$shared/base-components/component/base-component.model";
import type { HeaderMenuButton } from "src/models/header-menu-btn.model";

export interface InitParams {
    baseComponents: BaseComponent[];
}

export interface FooterInitParams {

}

export interface HeaderInitParams {
    logo?: string;
    fullWidth: boolean;
    menuButton: HeaderMenuButton;
    navType: string;
}
