export const formatQueryProducts = (query) => {
    const _query = typeof query === 'object' ? query : JSON.parse(query)
    let queryObj = {}
    if (_query?.data?.textSearch) {
        queryObj.textSearch = _query.data.textSearch
    }
    if (_query?.data?.sort?.value) {
        queryObj.order = _query.data.sort.field
        queryObj.orderBy = _query.data.sort.type
    }
    if (_query?.data?.typeId?.value) {
        queryObj.typeId = _query.data.typeId.value
    }
    return queryObj
}