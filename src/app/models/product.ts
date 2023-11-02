export interface IConfigure {
    chip: string,
    SDD: string,
    memory: string,
    display: string 
}

export interface IProducts {
    id: number,
    title: string,
    price: number,
    image?: string,
    configure: IConfigure 
}