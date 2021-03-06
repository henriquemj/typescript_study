export abstract class View<T> {
    
        protected _elemento: JQuery;
        private _escapar: boolean;
    
        constructor(selector: string, escapar: boolean = false) {
    
            this._elemento = $(selector);
            this._escapar = escapar;
        }
    
        update(model: T) {


          const t1 = performance.now();


          let template = this. template(model);
          if(this._escapar)
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');

            this._elemento.html(template);

          const t2 = performance.now();

          console.log('o tempo de execução de update é de ${t2 - t1} ms');
        }
    
        abstract template(model: T): string;
    
    }

