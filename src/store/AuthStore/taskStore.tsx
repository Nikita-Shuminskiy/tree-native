import {action, makeObservable, observable} from "mobx";
import travelImg from "../../assets/images/travel.png";
import stapleImg from "../../assets/images/staple.png";
import {observer} from "mobx-react-lite";
import treeCarer from "../../assets/images/treeCarer.png";
import treeFamily from "../../assets/images/treeFamily.png";


export class TaskStore {
    dataTask: any = [
        {
            id: 1,
            title: 'Карьера',
            img: travelImg
        },
        {
            id: 2,
            title: 'Путешествие',
            img: travelImg
        },
        {
            id: 3,
            title: 'Семья',
            img: travelImg
        },
    ]
    dataUsefulArticles: any = [
        {
            id: 1,
            title: 'Как правильно ставить цели ?',
            img: stapleImg
        },
        {
            id: 2,
            title: 'Дедлайн: что это такое\nи насколько важно',
            img: stapleImg
        },
        {
            id: 3,
            title: 'Эффективность в достижении цели',
            img: stapleImg
        },
        {
            id: 4,
            title: 'Зачем прописывать цели ?',
            img: stapleImg
        },
    ]
    dataLastAddedTask: any = [
        {
            id: 1,
            title: 'Сьездить в аквапарк',
            img: stapleImg
        },
        {
            id: 2,
            title: 'Купить билеты в Дублин',
            img: stapleImg
        },
        {
            id: 3,
            title: 'Заработать миллион',
            img: stapleImg
        },
    ]
    myDataCardDone: any = [
        {
            id: 1,
            img: treeCarer,
            title: 'Карьера',
            numTask: [{
                id:1,
                img: treeFamily,
                title: 'Похудеть',
                description: 'я хочу похудеть я хочу похудеть',
                deadline: '20.12.2023'
            },{
                id:2,
                img: treeFamily,
                title: 'Похудеть',
                description: 'я хочу сесть',
                deadline: '20.12.2023'
            },{
                id:3,
                img: treeFamily,
                title: 'Похудеть',
                description: 'я хочу похудеть',
                deadline: '20.12.2023'
            },{
                id:4,
                img: treeFamily,
                title: 'Похудеть',
                description: 'я хочу похудеть',
                deadline: '20.12.2023'
            }

            ]
        },
        {
            id: 2,
            img: treeFamily,
            title: 'Путешествия',
            numTask: [1, 2, 4]
        },
        {
            id: 3,
            img: treeCarer,
            title: 'Семья',
            numTask: [1, 2, 3, 4, 5]
        }
    ]
    currentGarden: any = []
    setdataTask(data: any): void {

    }

    setDataLastAddedTask(data: any): void {

    }

    setDataUsefulArticles(data: any): void {

    }
    setDataCard(data: any) {

    }
    setGardenId(idCard: any) {
      const currCard = this.myDataCardDone?.find(el => el.id === Number(idCard))

       this.currentGarden = currCard
    }

    constructor() {
        makeObservable(this, {
            dataTask: observable,
            dataUsefulArticles: observable,
            dataLastAddedTask: observable,
            myDataCardDone: observable,
            currentGarden: observable,

            setdataTask: action,
            setGardenId: action,
            setDataCard: action,
            setDataLastAddedTask: action,
            setDataUsefulArticles: action,
        })
        this.setGardenId = this.setGardenId.bind(this)
    }
}

export default new TaskStore()
