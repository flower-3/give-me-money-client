import useGrant from '../../hooks/useGrant';

function getGrantServiceList(page: number, perPage: number) {
  return useGrant('/api/v1/gov24/serviceList', {
    page: page,
    perPage: perPage,
  });
}

function getGrantServiceDetail(serviceId: string) {
  return useGrant('/api/v1/gov24/serviceDetail', {
    serviceId: serviceId,
  });
}

export { getGrantServiceList, getGrantServiceDetail };
