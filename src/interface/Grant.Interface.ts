interface GrantServiceModel {
  서비스ID: string;
  지원유형: string;
  서비스명: string;
  서비스목적: string;
  지원대상: string;
  선정기준: string;
  지원내용: string;
  신청방법: string;
  신청기한: string;
  상세조회URL: string;
  소관기관코드: string;
  소관기관명: string;
  부서명: string;
  조회수: number;
}

export default interface GrantServiceList {
  page: number;
  perPage: number;
  totalCount: number;
  currentCount: number;
  data: GrantServiceModel[];
}
