package api

import context.ServiceExecutionContext
import play.api.mvc.{AbstractController, Action, AnyContent, ControllerComponents, Result, Results}

import javax.inject.{Inject, Singleton}

@Singleton
class HelloWebService @Inject()(protected val cc: ControllerComponents, implicit val ec: ServiceExecutionContext) extends AbstractController(cc) {
  def get(): Action[AnyContent] = Action(parse.json){
    Ok("Hello, Scala!")
  }
}
