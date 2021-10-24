import useGrant from '../../hooks/useGrant';

function getGrantServiceList(page: number, perPage: number) {
  return useGrant('/api/v1/gov24/v1/serviceList', {
    page: page,
    perPage: perPage,
  });
}

function getGrantServiceDetail(serviceId: string) {
  return useGrant('/api/v1/gov24/v1/serviceDetail', {
    serviceId: serviceId,
  });
}

export { getGrantServiceList, getGrantServiceDetail };
