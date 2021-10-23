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

export interface GrantServiceDetailModel {
  SVC_ID: string;
  지원유형: string;
  서비스명: string;
  서비스목적: string;
  신청기한: string;
  지원대상: string;
  선정기준: string;
  지원내용: string;
  신청방법: string;
  구비서류: string;
  접수기관명: string;
  문의처전화번호: string;
  온라인신청사이트URL: string;
  수정일시: string;
  소관기관명: string;
  행정규칙: string;
  자치법규: string;
  법령: string;
}

interface GrantSupportConditionsModel {
  SVC_ID: string; // 공공서비스 고유 식별자
  JA0101: string; // 남성
  JA0102: string; // 여성
  JA010: string; // 영유아(0세~5세)
  JA0104: string; // 아동(6세~12세)
  JA0105: string; // 청소년(13세~18세)
  JA0106: string; // 청년(19세~29세)
  JA0107: string; // 중년(30세~49세)
  JA0108: string; // 장년(50세~64세)
  JA0109: string; // 노년(65세~)
  JA0201: string; // 기준중위소득 0% ~ 50%
  JA0202: string; // 기준중위소득 51% ~ 75%
  JA0203: string; // 기준중위소득 76% ~ 100%
  JA0204: string; // 기준중위소득 101% ~ 200%
  JA0205: string; // 기준중위소득 200% 초과
  JA0301: string; // 난임
  JA0302: string; // 임신부
  JA0303: string; // 출산후
  JA0304: string; // 심한 장애
  JA0305: string; // 심하지 않은 장애
  JA0306: string; // 국가유공자
  JA0307: string; // 제대군인
  JA0308: string; // 경관농업인
  JA0309: string; // 경종농업인
  JA0310: string; // 과수농업인
  JA0311: string; // 원예·특용농업인
  JA0312: string; // 농지소유자
  JA0313: string; // 기타 농업인
  JA0314: string; // 연근해/구획어업인
  JA0315: string; // 양식업인
  JA0316: string; // 어선소유자
  JA0317: string; // 기타 어업인
  JA0318: string; // 축산업인
  JA0319: string; // 임업인
  JA0320: string; // 초중고학생
  JA0321: string; // 대학/대학원생
  JA0322: string; // 해당사항없음
  JA0401: string; // 다문화가족
  JA0402: string; // 북한이탈주민
  JA0403: string; // 한부모가정/조손가정
  JA0404: string; // 1인가구
  JA0405: string; // 질병/부상/질환자
  JA0406: string; // 중증·난치·희귀질환자
  JA0407: string; // 요양, 치매환자
  JA0408: string; // 근로자/직장인
  JA0409: string; // 구직자/실업자
  JA0410: string; // 해당사항없음
  JA0411: string; // 다자녀가구
}

export interface GrantServiceList {
  page: number;
  perPage: number;
  totalCount: number;
  currentCount: number;
  data: GrantServiceModel[];
}

export interface GrantServiceDetailList {
  page: number;
  perPage: number;
  totalCount: number;
  currentCount: number;
  data: GrantSupportConditionsModel[];
}

export interface GrantSupportConditionsList {
  page: number;
  perPage: number;
  totalCount: number;
  currentCount: number;
  data: GrantServiceDetailModel[];
}
