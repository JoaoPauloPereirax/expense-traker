export type Category = {
       [tag: string]: {
              /*
              Neste caso ele vai pegar qualquer
              tipo de string para
              */

              title: string;
              color: string;
              expense: boolean;
       }
}