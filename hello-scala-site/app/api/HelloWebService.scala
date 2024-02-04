package api

import context.ServiceExecutionContext
import play.api.mvc.{AbstractController, Action, AnyContent, ControllerComponents}

import javax.inject.{Inject, Singleton}

@Singleton
class HelloWebService @Inject()(protected val cc: ControllerComponents, implicit val ec: ServiceExecutionContext) extends AbstractController(cc) {
  def get(): Action[AnyContent] = Action {
    Ok("Hello, Scala!")
  }
}
