import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardService {
  //* Memory에 저장한다
  private boards = [];

  //* 모든 게시판의 글을 가져온다.
  getAllBoardsFromMemory() {
    return this.boards;
  }
}
