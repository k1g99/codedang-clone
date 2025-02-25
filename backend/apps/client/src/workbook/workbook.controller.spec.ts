import { Test, type TestingModule } from '@nestjs/testing'
import { expect } from 'chai'
import { RolesService } from '@libs/auth'
import {
  WorkbookController,
  GroupWorkbookController
} from './workbook.controller'
import { WorkbookService } from './workbook.service'

describe('WorkbookController', () => {
  let controller: WorkbookController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkbookController],
      providers: [{ provide: WorkbookService, useValue: {} }]
    }).compile()

    controller = module.get<WorkbookController>(WorkbookController)
  })

  it('should be defined', () => {
    expect(controller).to.be.ok
  })
})

describe('GroupWorkbookController', () => {
  let controller: GroupWorkbookController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GroupWorkbookController],
      providers: [
        { provide: WorkbookService, useValue: {} },
        { provide: RolesService, useValue: {} }
      ]
    }).compile()

    controller = module.get<GroupWorkbookController>(GroupWorkbookController)
  })

  it('should be defined', () => {
    expect(controller).to.be.ok
  })
})
