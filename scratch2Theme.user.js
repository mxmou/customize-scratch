// ==UserScript==
// @name         Scratch 2 theme for Scratch 3
// @author       MaxiMouse
// @version      1.0
// @description  Makes Scratch 3 look like Scratch 2.
// @match        https://scratch.mit.edu/projects/*
// @match        https://llk.github.io/scratch-gui/*
// @grant        GM_addStyle
// @updateURL    https://github.com/mxmou/customize-scratch/raw/master/scratch2Theme.user.js
// ==/UserScript==

(function() {
    'use strict';

    // Page background
    GM_addStyle(".gui_body-wrapper_-N0sA {background-color: white}");
    // Menu bar
    GM_addStyle(
        ".gui_menu-bar-position_3U1T0 {background-color: #9c9ea2}" +
        ".menu-bar_hoverable_c6WFB:hover, .menu-bar_active_2Lfqh {background: inherit!important; color: #fba939}" +
        ".share-button_share-button_Nxxf0 {background-color: #fba939}" +
        ".menu_menu_3k7QT, .blocklyContextMenu {" +
        "background-color: #9c9ea2!important; " +
        "border: none; " +
        "border-radius: 0px}" +
        ".language-selector_language-select_8Vfnm option {background-color: #9c9ea2; color: white}"
    );
    // Project player
    GM_addStyle(
        ".stage-wrapper_stage-wrapper_2bejr > div:first-child {" +
        "border: 1px solid #d0d1d2; " +
        "border-radius: 0.375rem 0.375rem 0px 0px; " +
        // "width: 100.5%; " +
        "background-image: linear-gradient(#fefefe, #e6e6e8)}" +
        ".stage-wrapper_stage-wrapper_2bejr {margin-top: 0.3125rem}" +
        ".stage_stage_1fD7k {border: 1px solid #d0d1d2; border-radius: 0px}" +
        ".stage-header_stage-button_hkl9B {background: none; border: none}" +
        ".stage_green-flag-overlay-wrapper_2hUi_ {border-radius: 0px}"
    );
    // Full screen
    GM_addStyle(
        ".stage_stage-wrapper-overlay_fmZuD {padding-top: 0px}" +
        ".stage-header_stage-header-wrapper-overlay_5vfJa {background: white}" +
        ".stage-header_stage-header-wrapper-overlay_5vfJa .stage-header_stage-menu-wrapper_15JJt {" +
        "border: 1px solid #d0d1d2; " +
        "border-radius: 0.375rem 0.475rem 0px 0px; " +
        "background-image: linear-gradient(#fefefe, #e6e6e8)}"
    );
    // Backpack
    GM_addStyle(".backpack_backpack-header_6ltCS {background-image: linear-gradient(#fefefe, #e6e6e8)}")
    // Code/Costumes/Sounds tabs
    GM_addStyle(
        ".react-tabs_react-tabs__tab_3Nn-X {" +
        "border-radius: 0.375rem 0.375rem 0px 0px; " +
        "background-color: #f2f2f2; " +
        "color: #8f9193; " +
        "height: 90%}" +
        ".react-tabs_react-tabs__tab--selected_EW0CL, .react-tabs_react-tabs__tab_3Nn-X:hover {" +
        "background-image: linear-gradient(#fefefe, #e6e6e8); " +
        "color: #575e75!important}"
    );
    // Target pane
    GM_addStyle(
        ".sprite-selector_sprite-selector_2KgCX {" +
        "margin-right: 0px; padding-right: 0.25rem; " +
        "border-radius: 0.375rem 0px 0px 0px}" +
        ".target-pane_stage-selector-wrapper_qekSW {margin-left: 0px!important}" +
        ".stage-selector_stage-selector_3oWOr {padding-left: 0.25rem; border-radius: 0px 0.375rem 0px 0px}" +
        ".sprite-info_sprite-info_3EyZh {width: calc(100% + 0.25rem); border-radius: inherit}" +
        ".sprite-selector_scroll-wrapper_3NNnc {background-color: #e6e6e8; width: calc(100% + 0.25rem)}" +
        ".action-menu_button_1qbot, .action-menu_more-buttons-outer_3J9yZ {background-color: #9c9ea2}" +
        ".action-menu_button_1qbot {box-shadow: none}" +
        ".action-menu_button_1qbot:hover {box-shadow: none; background-color: #1e9ed6}" +
        ".action-menu_tooltip_3Bkh5 {background-color: #1e9ed6!important}" +
        ".action-menu_tooltip_3Bkh5::after {background-color: #1e9ed6!important}" +
        ".sprite-info_radio_v-fgn {border: 1px solid #d0d1d2; background-image: linear-gradient(#fefefe, #e6e6e8)}"
    );
    // Code editor
    GM_addStyle(
        ".blocklyToolboxDiv, .scratchCategoryMenuItem {background-color: #e6e6e8; color: #8f9193}" +
        ".scratchCategoryMenuItem:hover {color: #fba939!important}" +
        ".blocklyFlyoutBackground {fill: #e6e6e8; fill-opacity: 1}" +
        ".categorySelected, .categorySelected:hover {" +
        "background-color: #9c9ea2!important; color: white!important}" +
        ".blocklyMainBackground {fill: #dddede!important}" +
        ".scratchCategoryItemBubble {border-radius: 0px; border: none!important}"+
        ".goog-menuitem:not(:hover) {color: white!important}" +
        ".blocklyFlyoutButton:hover {fill: #59b8df}" +
        ".gui_extension-button-container_b4rCs {" +
        "background-color: #59b8df; " +
        "width: 60px; " +
        "border: 1px solid #d0d1d2;  border-radius: 0.375rem}" +
        ".gui_extension-button-container_b4rCs::before {display: none}"
    );
    // Paint & sound editor
    GM_addStyle(
        ".button_button_u6SE2, .sound-editor_button_1_6Li, .icon-button_container_278u5, .sound-editor_round-button_3NLcW {" +
        "background-image: linear-gradient(#fefefe, #e6e6e8); " +
        "border: 1px solid #d0d1d2}" +
        ".button_button_u6SE2:hover:not(.button_mod-disabled_1rf31), .tool-select-base_is-selected_3x4kL," +
        ".color-button_color-button-arrow_2NxGY:hover, .sound-editor_button_1_6Li:hover:not([disabled]), " +
        ".icon-button_container_278u5:hover, .sound-editor_round-button_3NLcW:hover {" +
        "background-color: #59b8df!important; background-image: none}" +
        ".icon-button_container_278u5 {border-radius: 0.375rem}" +
        ".sound-editor_waveform-container_1x_b1 {background-color: white}" +
        ".waveform_waveform-path_TskyB {fill: black; stroke: none}" +
        ".waveform_baseline_2J5dw {stroke: black}" +
        ".selector_list-area_1Xbj_ {background-color: #e6e6e8}" +
        ".asset-panel_detail-area_2KQhH {background-color: #f2f2f2}" +
        ".paint-editor_button-text_1na_o {color: #575e75}" +
        ".color-button_color-button-arrow_2NxGY {background-image: linear-gradient(#fefefe, #e6e6e8)}"
    );
    // Dialog windows
    GM_addStyle(
        ".ReactModal__Overlay {background: none}" +
        ".ReactModal__Content {border: 1px solid #b0b0b0}" +
        ".modal_header_1h7ps {" +
        "background-image: linear-gradient(#dfdfdf, #d0d0d0); " +
        "border-bottom: 1px solid #b0b0b0}" +
        ".modal_header-item_2zQTd {color: #575e75}" +
        ".close-button_large_2oadS {" +
        "border: 1px solid #d0d1d2; " +
        "background-image: linear-gradient(#fefefe, #e6e6e8); " +
        "box-shadow: none}" +
        ".ReactModal__Content button, .custom-procedures_option-card_BtHt3 {" +
        "border: 1px solid #d0d1d2!important; box-shadow: none!important; " +
        "background-image: linear-gradient(#fefefe, #e6e6e8)!important; color: #575e75!important}" +
        ".ReactModal__Content button:hover, .custom-procedures_option-card_BtHt3:hover {" +
        "background-color: #59b8df; background-image: none!important; " +
        "color: white}" +
        ".blocklyEditableText rect:not(.blocklyBlockBackground) {fill: #6d30a4!important}" +
        ".record-modal_waveform-container__ay3Q, .record-modal_meter-container_3OqCJ {background: white}" +
        ".camera-modal_main-button_1G6x1 {" +
        "background-color: #59b8df!important; background-image: none!important}" +
        ".ReactModal__Content .blocklyMainBackground {fill: white!important; stroke: none!important}"
    );
    // Libraries
    GM_addStyle(
        ".library_library-scroll-grid_1jyXm {background-color: white}" +
        ".library-item_library-item_1DcMO {border: none}" +
        ".library_filter-bar_1W0DW {background-color: #e6e6e8}" +
        ".tag-button_tag-button_nBLRM {background: none; color: #179fd7; font-weight: normal}" +
        ".tag-button_tag-button_nBLRM:hover {color: #fba939}" +
        ".tag-button_active_2stEz {color: #575e75; font-weight: bold}"
    );
    // Sprite/costume/sound lists
    GM_addStyle(
        ".sprite-selector-item_sprite-selector-item_kQm-i {" +
        "border: none!important; background-color: white; box-shadow: none!important}" +
        ".sprite-selector-item_sprite-info_-I0i_ {background: none!important; color: #575e75!important}" +
        ".sprite-selector-item_is-selected_24tQj {" +
        "border: 3px solid #59b8df!important; background-color: #d0d0d0!important}" +
        ".close-button_small_3BsRW {background-color: black}" +
        ".asset-panel_wrapper_366X0 .sprite-selector-item_sprite-selector-item_kQm-i {background: none}"
    );
    // Text inputs
    GM_addStyle(
        "input[type=text], input:not([type]) {" +
        "box-shadow: 1px 1px 1px 0px inset #828486!important; " +
        "background-color: white!important; " +
        "border-width: 1px!important; border-style: solid!important; outline: none!important; " +
        "border-top-color: #828486!important; border-left-color: #828486!important; " +
        "border-bottom-color: #d0d1d2!important; border-right-color: #d0d1d2!important; " +
        "border-radius: 0.375rem!important; " +
        "color: #575e75; font-weight: normal}"
    )
})();
