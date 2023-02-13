import { Controller, Get, Logger } from '@nestjs/common';
import { BoardService } from '../service/board.service';

@Controller('boards')
export class BoardController {
  private logger = new Logger('BoardController');

  constructor(private readonly boardsService: BoardService) {}

  @Get('memory')
  getAllBoards() {
    return this.boardsService.getAllBoardsFromMemory();
  }
}
