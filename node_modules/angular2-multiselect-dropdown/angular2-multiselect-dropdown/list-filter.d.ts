import { PipeTransform } from '@angular/core';
import { ListItem } from './multiselect.model';
export declare class ListFilterPipe implements PipeTransform {
    transform(items: ListItem[], filter: ListItem): ListItem[];
    /**
     * Perform the filtering.
     *
     * @param {Book} book The book to compare to the filter.
     * @param {Book} filter The filter to apply.
     * @return {boolean} True if book satisfies filters, false if not.
     */
    applyFilter(item: ListItem, filter: ListItem): boolean;
}
