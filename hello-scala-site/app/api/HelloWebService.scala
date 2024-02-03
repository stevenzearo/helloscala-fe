package api

import context.ServiceExecutionContext
import play.api.mvc.{ControllerComponents, Result, Results}
import play.mvc.Controller

import javax.inject.{Inject, Singleton}

@Singleton
class HelloWebService @Inject()(protected val cc: ControllerComponents, implicit val ec: ServiceExecutionContext) extends Controller {
  def get(): Result = {
    Results.Ok("Hello, Scala!")
  }
}
