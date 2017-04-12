import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search'
})

export class SearchPipe implements PipeTransform { 
    transform(pipeData, pipeModiefier){
        return pipeData.filter((eachItem)=> {
            return eachItem['name'].toLowerCase().includes(pipeModiefier.toLowerCase()) || 
                   eachItem['reknown'].toLowerCase().includes(pipeModiefier.toLowerCase());
        });
    }
}