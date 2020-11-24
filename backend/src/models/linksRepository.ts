import { iLike } from "sequelize/types/lib/operators"
import linkModel, {ILinkModel} from './linkModel'
import {Link} from './link'

function findBycode(code: string){
    return linkModel.findOne<ILinkModel>({ where: { code }} )
}

function add(link: Link){
    return linkModel.create<ILinkModel>(link)
}

async function hit(code: string){
    const link = await findBycode(code)
    if(!link) return null

    link.hits!++
    await link.save()
    return link
}

export default {
    findBycode,
    add,
    hit
}