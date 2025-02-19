﻿/**
 * Contains the TabStripItem class, which represents a tab strip entry for tab navigation.
 * @module "ui/tab-navigation/tab-strip-item"
 */ /** */

import { View, EventData } from "../../core/view";
import { Image } from "../../image/image";
import { Label } from "../../label/label";

/**
 * Represents a tab strip entry.
 */
export class TabStripItem extends View {
    /**
     * Gets or sets the title of the tab strip entry.
     */
    title: string;

    /**
     * Gets or sets the icon source of the tab strip entry.
     */
    iconSource: string;

    /**
    * Gets or sets the label of the tab strip entry.
    */
    label: Label;

    /**
     * Gets or sets the image of the tab strip entry.
     */
    image: Image;

    /**
     * String value used when hooking to the tap event.
     */
    public static tapEvent: string;

    //@private
    /**
     * @private
     */
    static selectEvent: string;

    /**
     * @private
     */
    static unselectEvent: string;
    //@endprivate

    /**
     * A basic method signature to hook an event listener (shortcut alias to the addEventListener method).
     * @param eventNames - String corresponding to events (e.g. "propertyChange"). Optionally could be used more events separated by `,` (e.g. "propertyChange", "change").
     * @param callback - Callback function which will be executed when event is raised.
     * @param thisArg - An optional parameter which will be used as `this` context for callback execution.
     */
    on(eventNames: string, callback: (data: EventData) => void);

    /**
     * Raised when a tap event occurs.
     */
    on(event: "tap", callback: (args: EventData) => void);
}
